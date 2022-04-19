package com.highradius.indiction;

public class InvoiceData {
	//pojo
	private Integer sl_no,cust_number,posting_id,invoice_id;
	private Boolean isOpen,is_deleted;
	private String business_code,clear_date,buisness_year,doc_id,posting_date,
	document_create_date,document_create_date1,due_in_date,invoice_currency,
	document_type,area_business,baseline_create_date,cust_payment_terms,
	aging_bucket,name_customer,business_name;
	private Double total_open_amount;
	public Integer getSl_no() {
		return sl_no;
	}
	public void setSl_no(Integer sl_no) {
		this.sl_no = sl_no;
	}
	public Integer getCust_number() {
		return cust_number;
	}
	public void setCust_number(Integer cust_number) {
		this.cust_number = cust_number;
	}
	public Integer getPosting_id() {
		return posting_id;
	}
	public void setPosting_id(Integer posting_id) {
		this.posting_id = posting_id;
	}
	public Integer getInvoice_id() {
		return invoice_id;
	}
	public void setInvoice_id(Integer invoice_id) {
		this.invoice_id = invoice_id;
	}
	public Boolean getIsOpen() {
		return isOpen;
	}
	public void setIsOpen(Boolean isOpen) {
		this.isOpen = isOpen;
	}
	public Boolean getIs_deleted() {
		return is_deleted;
	}
	public void setIs_deleted(Boolean is_deleted) {
		this.is_deleted = is_deleted;
	}
	public String getBusiness_code() {
		return business_code;
	}
	public void setBusiness_code(String business_code) {
		this.business_code = business_code;
	}
	public String getClear_date() {
		return clear_date;
	}
	public void setClear_date(String clear_date) {
		this.clear_date = clear_date;
	}
	public String getBuisness_year() {
		return buisness_year;
	}
	public void setBuisness_year(String buisness_year) {
		this.buisness_year = buisness_year;
	}
	public String getDoc_id() {
		return doc_id;
	}
	public void setDoc_id(String doc_id) {
		this.doc_id = doc_id;
	}
	public String getPosting_date() {
		return posting_date;
	}
	public void setPosting_date(String posting_date) {
		this.posting_date = posting_date;
	}
	public String getDocument_create_date() {
		return document_create_date;
	}
	public void setDocument_create_date(String document_create_date) {
		this.document_create_date = document_create_date;
	}
	public String getDocument_create_date1() {
		return document_create_date1;
	}
	public void setDocument_create_date1(String document_create_date1) {
		this.document_create_date1 = document_create_date1;
	}
	public String getDue_in_date() {
		return due_in_date;
	}
	public void setDue_in_date(String due_in_date) {
		this.due_in_date = due_in_date;
	}
	public String getInvoice_currency() {
		return invoice_currency;
	}
	public void setInvoice_currency(String invoice_currency) {
		this.invoice_currency = invoice_currency;
	}
	public String getDocument_type() {
		return document_type;
	}
	public void setDocument_type(String document_type) {
		this.document_type = document_type;
	}
	public String getArea_business() {
		return area_business;
	}
	public void setArea_business(String area_business) {
		this.area_business = area_business;
	}
	public String getBaseline_create_date() {
		return baseline_create_date;
	}
	public void setBaseline_create_date(String baseline_create_date) {
		this.baseline_create_date = baseline_create_date;
	}
	public String getCust_payment_terms() {
		return cust_payment_terms;
	}
	public void setCust_payment_terms(String cust_payment_terms) {
		this.cust_payment_terms = cust_payment_terms;
	}
	public String getAging_bucket() {
		return aging_bucket;
	}
	public void setAging_bucket(String aging_bucket) {
		this.aging_bucket = aging_bucket;
	}
	public String getName_customer() {
		return name_customer;
	}
	public void setName_customer(String name_customer) {
		this.name_customer = name_customer;
	}
	public String getBusiness_name() {
		return business_name;
	}
	public void setBusiness_name(String business_name) {
		this.business_name = business_name;
	}
	public Double getTotal_open_amount() {
		return total_open_amount;
	}
	public void setTotal_open_amount(Double total_open_amount) {
		this.total_open_amount = total_open_amount;
	}
	public InvoiceData(Integer sl_no, Integer cust_number, Integer posting_id, Integer invoice_id, Boolean isOpen,
			Boolean is_deleted, String business_code, String clear_date, String buisness_year, String doc_id,
			String posting_date, String document_create_date, String document_create_date1, String due_in_date,
			String invoice_currency, String document_type, String area_business, String baseline_create_date,
			String cust_payment_terms, String aging_bucket, 
//			String name_customer, String business_name,
			Double total_open_amount) {
		super();
		this.sl_no = sl_no;
		this.cust_number = cust_number;
		this.posting_id = posting_id;
		this.invoice_id = invoice_id;
		this.isOpen = isOpen;
		this.is_deleted = is_deleted;
		this.business_code = business_code;
		this.clear_date = clear_date;
		this.buisness_year = buisness_year;
		this.doc_id = doc_id;
		this.posting_date = posting_date;
		this.document_create_date = document_create_date;
		this.document_create_date1 = document_create_date1;
		this.due_in_date = due_in_date;
		this.invoice_currency = invoice_currency;
		this.document_type = document_type;
		this.area_business = area_business;
		this.baseline_create_date = baseline_create_date;
		this.cust_payment_terms = cust_payment_terms;
		this.aging_bucket = aging_bucket;
		this.name_customer = name_customer;
		this.business_name = business_name;
		this.total_open_amount = total_open_amount;
	};
		
}
