package com.tlv8.system.online;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.ibatis.session.SqlSession;

import com.tlv8.base.db.DBUtils;

public class OnlineUtils {
	public static void deleteOnlie(String sessionID) {
		try {
			DBUtils.execdeleteQuery("system", "delete from SA_ONLINEINFO where SSESSIONID = '" + sessionID + "'");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public static int getOnlineCount() {
		int r = -1;
		SqlSession session = DBUtils.getSession("system");
		Connection conn = null;
		ResultSet rs = null;
		try {
			conn = session.getConnection();
			String sql = "select count(*) CON from SA_ONLINEINFO";
			rs = conn.createStatement().executeQuery(sql);
			if (rs.next()) {
				r = rs.getInt(1);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBUtils.CloseConn(session, conn, null, rs);
		}
		return r;
	}
}
