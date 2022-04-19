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
 * Servlet implementation class AddInvoiceData
 */
@WebServlet("/AddInvoiceData")
public class AddInvoiceData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddInvoiceData() {
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
			business_code = request.getParameter("business_code"),
		    
		    clear_date= request.getParameter("clear_date"),
		    buisness_year= request.getParameter("buisness_year"),
		    doc_id= request.getParameter("doc_id"),
		    posting_date= request.getParameter("posting_date"),
		    document_create_date= request.getParameter("document_create_date"),
		    due_in_date= request.getParameter("due_in_date"),
		    invoice_currency= request.getParameter("invoice_currency"),
		    document_type= request.getParameter("document_type"),
		    
		    
		    baseline_create_date= request.getParameter("baseline_create_date"),
		    cust_payment_terms= request.getParameter("cust_payment_terms")
		    
			;
			int 
			cust_number=Integer.parseInt(request.getParameter("cust_number")) ,
			posting_id= Integer.parseInt(request.getParameter("posting_id")),
			invoice_id= Integer.parseInt(request.getParameter("invoice_id"))
			;
			double total_open_amount= Double.parseDouble(request.getParameter("total_open_amount"));
			
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","tanmay");
//			String getRowCount = "SELECT COUNT(*) FROM winter_internship;";
//			PreparedStatement ps1 = connection.prepareStatement(getRowCount);
//			ps1.executeUpdate();
			
			
			String sql="INSERT INTO winter_internship ("
					+ "business_code,"
					+ "cust_number,"
					+ "clear_date,"
					+ "buisness_year,"
					+ "doc_id,"
					+ "posting_date,"
					+ "document_create_date,"
					+ "due_in_date,"
					+ "invoice_currency,"
					+ "document_type,"
					+ "posting_id,"
					+ "total_open_amount,"
					+ "baseline_create_date,"
					+ "cust_payment_terms,"
					+ "invoice_id"
					+ ")"
					+ " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setString(1,business_code);
			ps.setInt(2,cust_number);
			ps.setString(3,clear_date);
			ps.setString(4,buisness_year);
			ps.setString(5,doc_id);
			ps.setString(6,posting_date);
			ps.setString(7,document_create_date);
			ps.setString(8,due_in_date);
			ps.setString(9,invoice_currency);
			ps.setString(10,document_type);
			ps.setInt(11,posting_id);
			ps.setDouble(12,total_open_amount);
			ps.setString(13,baseline_create_date);
			ps.setString(14,cust_payment_terms);
			ps.setInt(15,invoice_id);

            if(ps.executeUpdate()>0) {
            	Response.put("Status", "Success");
            	Response.put("Message", "Data Inserted Successfully");
            }
            else {
            	Response.put("Status", "Failed");
            	Response.put("Message", "Data Insertion Failed");
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
class hello {
    
}
