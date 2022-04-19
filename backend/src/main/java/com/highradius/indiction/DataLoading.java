package com.highradius.indiction;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.highradius.indiction.InvoiceData;

/**
 * Servlet implementation class DataLoading
 */
@WebServlet("/DataLoading")
public class DataLoading extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public DataLoading() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HashMap <Object,Object> Response = new HashMap<Object, Object>();
		ArrayList<InvoiceData> InvoiceDatas = new ArrayList<InvoiceData>();
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			int 
			rowsPerPage=Integer.parseInt(request.getParameter("rowsPerPage")),
			pageNo=Integer.parseInt(request.getParameter("page_no"))
			;
			String 
			orderBy = request.getParameter("orderby"),
			order = request.getParameter("order")		
			;
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","tanmay");
			//for data page wise
			PreparedStatement ps = connection.prepareStatement(
					"SELECT * FROM winter_internship"
					+ " WHERE is_deleted=0"
//					+ " INNER JOIN customer ON"
//					+ " winter_internship.cust_number=customer.cust_number"
//					+ " INNER JOIN business ON"
//					+ " winter_internship.business_code=business.business_code"
//					+ ";"
					+ " ORDER BY "+ orderBy + " " + order 
					+ " LIMIT ?,?;"
					);
//			ps.setString(1, orderBy);
//			ps.setString(2, order);
			ps.setInt(1, rowsPerPage*pageNo);
			ps.setInt(2, rowsPerPage);

//			System.out.println(ps);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				InvoiceData invoiceData = new InvoiceData(
						rs.getInt("sl_no"),
						rs.getInt("cust_number"),
						rs.getInt("posting_id"),
						rs.getInt("invoice_id"),
						rs.getBoolean("isOpen"),
						rs.getBoolean("is_deleted"),
						rs.getString("business_code"),
						rs.getString("clear_date"),
						rs.getString("buisness_year"),
						rs.getString("doc_id"),
						rs.getString("posting_date"),
						rs.getString("document_create_date"),
						rs.getString("document_create_date1"),
						rs.getString("due_in_date"),
						rs.getString("invoice_currency"),
						rs.getString("document_type"),
						rs.getString("area_business"),
						rs.getString("baseline_create_date"),
						rs.getString("cust_payment_terms"),
						rs.getString("aging_bucket"),
//						rs.getString("name_customer"),
//						rs.getString("business_name"),
						rs.getDouble("total_open_amount")
						);
				InvoiceDatas.add(invoiceData);
			}
			Response.put("invoiceDatas", InvoiceDatas);
			
			ps = connection.prepareStatement("SELECT count(*) from winter_internship;");
			rs = ps.executeQuery();
			rs.next();
			Response.put("count", rs.getInt(1));
			
			
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
