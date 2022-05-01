package com.tlv8.doc.svr.controller.handlers;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.tlv8.doc.svr.controller.impl.AbstractRequestHandler;
import com.tlv8.doc.svr.controller.utils.ExcelToPDFUtils;
import com.tlv8.doc.svr.controller.utils.MimeUtils;
import com.tlv8.doc.svr.controller.utils.PdfConverUtil;
import com.tlv8.doc.svr.controller.utils.Word2PdfAsposeUtil;
import com.tlv8.doc.svr.core.io.FileDownloader;
import com.tlv8.doc.svr.generator.beans.DocDocPath;
import com.tlv8.doc.svr.generator.beans.DocDocument;
import com.tlv8.doc.svr.generator.service.DocDocPathService;
import com.tlv8.doc.svr.generator.service.DocDocumentService;

/**
 * 以pdf格式查看文件
 * 
 * @author qianp
 * 
 */
public class FileViewPDFHandler extends AbstractRequestHandler {

	@Override
	public String getPathPattern() {
		return "/file/viewpdf/*/*/*";
	}

	@Override
	public void initHttpHeader(HttpServletResponse paramHttpServletResponse) {
		paramHttpServletResponse.setHeader("Cache-Control", "pre-check=0, post-check=0, max-age=0");
	}

	@Override
	public void handleRequest(HttpServletRequest paramHttpServletRequest, HttpServletResponse paramHttpServletResponse)
			throws Exception {
		String fileID = getFileID(paramHttpServletRequest);
		String fVersion = getVersion(paramHttpServletRequest);
		DocDocPath dpath = null;
		if ("last".equals(fVersion)) {
			dpath = DocDocPathService.getDocDocPathByFileID(fileID);
		} else {
			dpath = DocDocPathService.getDocDocPathByFileIDVersion(fileID, Long.parseLong(fVersion));
		}
		DocDocument doc = DocDocumentService.getDocumentByDocID(fileID);
		// 文件创建时间
		paramHttpServletResponse.setDateHeader("Last-Modified", doc.getFAddTime().getTime());
		// 文件大小
		// int filesize = FileDownloader.getFileSize(fileID,
		// dpath.getFFilePath());
		// 文件流
		InputStream inputStream = FileDownloader.download(fileID, dpath.getFFilePath());
		// paramHttpServletResponse.setContentLength(filesize);
		String DocType = "application/pdf";
		String extnm = doc.getFExtName();
		boolean istr = true;
		if (!isOffice(extnm)) {
			istr = false;
			try {
				DocType = MimeUtils.guessMimeTypeFromExtension(doc.getFExtName().replace(".", ""));
				if (DocType == null) {
					DocType = "application/octet-stream";
				}
			} catch (Exception e) {
			}
		}
		try {
			// 1.设置文件ContentType类型，这样设置，会自动判断下载文件类型
			paramHttpServletResponse.setContentType(DocType);
			String formFileName = doc.getFDocName();
			String userAgent = paramHttpServletRequest.getHeader("User-Agent");
			// 针对IE或者以IE为内核的浏览器：
			if (userAgent != null && (userAgent.contains("MSIE") || userAgent.contains("Trident"))) {
				formFileName = java.net.URLEncoder.encode(formFileName, "UTF-8");
			} else {
				// 非IE浏览器的处理：
				formFileName = new String(formFileName.getBytes(StandardCharsets.UTF_8), StandardCharsets.ISO_8859_1);
			}
			if (istr) {
				formFileName = formFileName.replace(doc.getFExtName(), ".pdf");
			}
			// 2.设置文件头：最后一个参数是设置下载文件名
			paramHttpServletResponse.setHeader("Content-Disposition", "inline; filename=" + formFileName);

			// 3.通过response获取ServletOutputStream对象(out)
			ServletOutputStream out = paramHttpServletResponse.getOutputStream();
			if (istr) {
				if (".xls".equals(extnm) || ".xlsx".equals(extnm)) {
					ExcelToPDFUtils.excel2pdf(inputStream, out);
				} else if (".doc".equals(extnm) || ".docx".equals(extnm)) {
					Word2PdfAsposeUtil.doc2pdf(inputStream, out);
				} else if (".ppt".equals(extnm)) {
					PdfConverUtil.ppt2pdf(inputStream, out);
				} else if (".pptx".equals(extnm)) {
					PdfConverUtil.pptx2pdf(inputStream, out);
				} else if (".wps".equals(extnm)) {
					// DocFmtConvert.wpsConvertPDF(inputStream, out);
					Word2PdfAsposeUtil.doc2pdf(inputStream, out);
				}
				try {
					out.close();
				} catch (Exception e) {
				}
			} else {
				byte[] arrayOfByte = new byte[2048];
				try {
					int i;
					while ((i = inputStream.read(arrayOfByte)) != -1)
						out.write(arrayOfByte, 0, i);
				} catch (Exception we) {
				} finally {
					try {
						out.close(); // 关闭输出流
					} catch (Exception e) {
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (inputStream != null) {
				inputStream.close(); // 关闭输入流
			}
		}
	}

	protected String getFileID(HttpServletRequest paramHttpServletRequest) {
		String fileID = null;
		String pathinfo = paramHttpServletRequest.getPathInfo();
		pathinfo = pathinfo.replace("/repository/file/viewpdf/", "");
		if (pathinfo.indexOf("/") > 0) {
			fileID = pathinfo.substring(0, pathinfo.indexOf("/"));
		} else {
			fileID = pathinfo;
		}
		if (fileID.indexOf("-") < 0) {
			fileID = fileID + "-root";// 只传数字时处理
		}
		return fileID;
	}

	protected String getVersion(HttpServletRequest paramHttpServletRequest) {
		String version = null;
		String pathinfo = paramHttpServletRequest.getPathInfo();
		pathinfo = pathinfo.replace("/repository/file/viewpdf/", "");
		String[] params = pathinfo.split("/");
		if (params.length > 1) {
			version = params[1];
		} else {
			version = "last";
		}
		return version;
	}

	protected boolean isOffice(String extnm) {
		return (".doc".equals(extnm) || ".docx".equals(extnm) || ".ppt".equals(extnm) || ".pptx".equals(extnm)
				|| ".xls".equals(extnm) || ".xlsx".equals(extnm) || ".wps".equals(extnm));
	}

}