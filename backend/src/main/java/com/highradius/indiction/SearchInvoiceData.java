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

/**
 * Servlet implementation class SearchInvoiceData
 */
@WebServlet("/SearchInvoiceData")
public class SearchInvoiceData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SearchInvoiceData() {
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
			String cust_number=request.getParameter("cust_number");
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","tanmay");			
			String sql="SELECT * FROM winter_internship WHERE cust_number LIKE '"+cust_number+"%';";
			PreparedStatement ps = connection.prepareStatement(sql);
//			ps.setInt(1,cust_number);
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

	private String toString(int cust_number) {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
