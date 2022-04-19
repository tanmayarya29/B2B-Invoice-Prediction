package com.highradius.indiction;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class UpdateInvoiceData
 */
@WebServlet("/UpdateInvoiceData")
public class UpdateInvoiceData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateInvoiceData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HashMap <Object,Object> Response = new HashMap<Object, Object>();
//		ArrayList<InvoiceData> InvoiceDatas = new ArrayList<InvoiceData>();
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String 
		    invoice_currency= request.getParameter("invoice_currency"),
		    cust_payment_terms= request.getParameter("cust_payment_terms");
			int sl_no=Integer.parseInt(request.getParameter("sl_no"));
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","tanmay");			
			String sql="UPDATE winter_internship"
					+ " SET invoice_currency = ?,"
					+ " cust_payment_terms = ?"
					+ " WHERE sl_no = ?;";
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setString(1,invoice_currency);
			ps.setString(2,cust_payment_terms);
			ps.setInt(3,sl_no);

            if(ps.executeUpdate()>0) {
            	Response.put("Status", "Success");
            	Response.put("Message", "Data Updated Successfully");
            }
            else {
            	Response.put("Status", "Failed");
            	Response.put("Message", "Data Updation Failed");
            }
            
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
