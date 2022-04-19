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
 * Servlet implementation class AdvSearchInvoiceData
 */
@WebServlet("/AdvSearchInvoiceData")
public class AdvSearchInvoiceData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdvSearchInvoiceData() {
        super();
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
			String cust_number=request.getParameter("cust_number"),
				invoice_id=request.getParameter("invoice_id"),
				buisness_year=request.getParameter("buisness_year"),
			    doc_id=request.getParameter("doc_id");

			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","tanmay");			
			String sql="SELECT * FROM winter_internship WHERE "
					+ " doc_id LIKE ? AND"
					+ " invoice_id LIKE ? AND"
					+ " cust_number LIKE ? AND"
					+ " buisness_year LIKE ?;";
			PreparedStatement ps = connection.prepareStatement(sql);
            ps.setString(1, doc_id+"%");
            ps.setString(2, invoice_id+"%");
            ps.setString(3, cust_number+"%");
            ps.setString(4, buisness_year+"%");
            
			System.out.println(ps);
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
