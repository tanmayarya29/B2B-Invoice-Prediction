package com.highradius.indiction;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class barChart
 */
@WebServlet("/barChart")
public class barChart extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public barChart() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
				HashMap <Object,Object> Response = new HashMap<Object, Object>();
				try {
					Class.forName("com.mysql.cj.jdbc.Driver");
					String 
					clear_date_start = request.getParameter("clear_date_start"),
					clear_date_end = request.getParameter("clear_date_end"),
					due_date_start = request.getParameter("due_date_start"),
					due_date_end = request.getParameter("due_date_end"),
					baseline_create_date_start = request.getParameter("baseline_create_date_start"),
					baseline_create_date_end = request.getParameter("baseline_create_date_end"),
					invoice_currency = request.getParameter("invoice_currency")
					;

					Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","tanmay");			
					String sql="SELECT business_code,total_open_amount,COUNT(*) AS noc FROM winter_internship "
							+ "WHERE clear_date BETWEEN ? AND ? "
							+ "AND due_in_date BETWEEN ? AND ? "
							+ "AND baseline_create_date BETWEEN ? AND ? "
							+ "AND invoice_currency = '"+invoice_currency+"' "
							+ "GROUP BY business_code;";
					PreparedStatement ps = connection.prepareStatement(sql);
					ps.setString(1, clear_date_start);
					ps.setString(2, clear_date_end);
					ps.setString(3, due_date_start);
					ps.setString(4, due_date_end);
					ps.setString(5, baseline_create_date_start);
					ps.setString(6, baseline_create_date_end);
		            
					System.out.println(ps);
					ResultSet rs = ps.executeQuery();
					ArrayList<HashMap<String,String>> list = new ArrayList<HashMap<String,String>>();
					while(rs.next()) {
						HashMap<String,String> map = new HashMap<String,String>();
						map.put("business_code", rs.getString("business_code"));
						map.put("total_open_amount", rs.getString("total_open_amount"));
						map.put("noc", rs.getString("noc"));
						list.add(map);
					}
					Response.put("status", "success");
					Response.put("data", list);
		            
				}catch (Exception e) {
					e.printStackTrace();
				}
				Gson gson = new Gson();
				String jsonResponse = gson.toJson(Response);
				response.setHeader("Access-Control-Allow-Origin", "*");
				response.getWriter().append(jsonResponse);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
