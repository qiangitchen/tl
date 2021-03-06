package com.tlv8.flw.task;

import java.util.List;
import java.util.Map;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tlv8.base.Data;
import com.tlv8.base.db.DBUtils;
import com.alibaba.fastjson.JSON;
import com.tlv8.base.ActionSupport;
import com.tlv8.system.bean.ContextBean;

/**
 * @see 获取代办任务
 * @author ChenQian
 */
@Controller
@Scope("prototype")
public class GetTaskList extends ActionSupport {
	private String psmId;
	Data data = new Data();

	public void setData(Data data) {
		this.data = data;
	}

	public Data getData() {
		return data;
	}

	@ResponseBody
	@RequestMapping("/GetTaskListAction")
	public Object execute() throws Exception {
		String personID = (psmId != null && !"undefined".equals(psmId) && !"".equals(psmId)) ? psmId
				: ContextBean.getContext(request).getCurrentPersonID();
		String personFID = ContextBean.getContext(request).getCurrentPersonFullID();
		String sql = "";
		if (DBUtils.IsMySQLDB("system")) {
			sql = "select SID,SNAME,SCDEPTNAME,SCPERSONNAME,"
					+ "SCREATETIME,SLOCK,SWARNINGTIME,SLIMITTIME from SA_TASK where (SEPERSONID = '" + personID
					+ "' or ('" + personFID + "' like concat(IFNULL(SEFID,'TASKTEMP/'),'%') and STYPEID is null) "
					+ " or EXISTS(select t.SCREATORID " + "	from sa_opagent t " + " where t.sagentid = '" + personID
					+ "'" + " and t.SVALIDSTATE = 1 and t.SCREATORID = SA_TASK.SEPERSONID "
					+ " and DATE_FORMAT(t.sstarttime,'%Y-%m-%d') <= DATE_FORMAT(now(),'%Y-%m-%d') "
					+ " and DATE_FORMAT(t.sfinishtime,'%Y-%m-%d') >= DATE_FORMAT(now(),'%Y-%m-%d') )"
					+ ") and SSTATUSID = 'tesReady' "
					+ " and (STYPEID is null or (STYPEID is not null and SLOCK is null))"
					// + " and screatetime >= date_sub(curdate(),interval 100 day) "
					+ " order by SCREATETIME desc limit 0,5";
		} else if (DBUtils.IsOracleDB("system")) {
			sql = "select SID,SNAME,SCDEPTNAME,SCPERSONNAME,SCREATETIME,SLOCK,SWARNINGTIME,SLIMITTIME from "
					+ "(select SID,SNAME,SCDEPTNAME,SCPERSONNAME,"
					+ "SCREATETIME,SLOCK,SWARNINGTIME,SLIMITTIME from SA_TASK where (SEPERSONID = '" + personID
					+ "' or ('" + personFID + "' like nvl(SEFID,'TASKTEMP/')||'%' and STYPEID is null) "
					+ " or EXISTS(select t.SCREATORID " + "	from sa_opagent t " + " where t.sagentid = '" + personID
					+ "'" + " and t.SVALIDSTATE = 1 and t.SCREATORID = SA_TASK.SEPERSONID "
					+ " and trunc(t.sstarttime) <= trunc(sysdate) " + " and trunc(t.sfinishtime) >= trunc(sysdate))"
					+ ") and SSTATUSID = 'tesReady' "
					+ " and (STYPEID is null or (STYPEID is not null and SLOCK is null))"
					// + " and screatetime >= sysdate - 100"
					+ " order by SCREATETIME desc ) where  rownum<=20";
		} else {
			sql = "select TOP 5 SID,SNAME,SCDEPTNAME,SCPERSONNAME,"
					+ "SCREATETIME,SLOCK,SWARNINGTIME,SLIMITTIME from SA_TASK where (SEPERSONID = '" + personID
					+ "' or ('" + personFID + "' like ISNULL(SEFID,'TASKTEMP/')+'%' and STYPEID is null) "
					+ " or EXISTS(select t.SCREATORID " + "	from sa_opagent t " + " where t.sagentid = '" + personID
					+ "'" + " and t.SVALIDSTATE = 1 and t.SCREATORID = SA_TASK.SEPERSONID "
					+ " and CONVERT(VARCHAR(10),t.sstarttime,110) <= CONVERT(VARCHAR(10),getdate(),110) "
					+ " and CONVERT(VARCHAR(10),t.sfinishtime,110) >= CONVERT(VARCHAR(10),getdate(),110))"
					+ ") and SSTATUSID = 'tesReady' "
					+ " and (STYPEID is null or (STYPEID is not null and SLOCK is null))"
					// + " and screatetime >= DATEADD(DAY,-100,GETDATE())"
					+ " order by SCREATETIME desc";
		}
		// System.out.println(sql);
		try {
			List<Map<String, String>> list = DBUtils.execQueryforList("system", sql);
			if (list.size() > 0) {
				data.setData(JSON.toJSONString(list));
			}
			data.setFlag("true");
		} catch (Exception e) {
			data.setFlag("false");
			data.setMessage(e.toString());
			e.printStackTrace();
		}
		return this;
	}

	public void setPsmId(String psmId) {
		this.psmId = psmId;
	}

	public String getPsmId() {
		return psmId;
	}

}
