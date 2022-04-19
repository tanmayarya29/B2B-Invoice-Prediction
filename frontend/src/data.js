import axios from "axios";

const baseUrl = "http://localhost:8080/indiction/";
const baseUrl2 = "http://127.0.0.1:5000/get_prediction";

export const getData = async (rowsPerPage,page_no,orderby,order) => {
  let dat = {
    rowsPerPage: rowsPerPage,
    page_no: page_no,
    orderby: orderby,
    order: order,
  };
  const response = await axios.get(baseUrl + "DataLoading", {params: dat});
  let data = response.data;
  // data.map((actor, index) => ({ ...actor, id: index }));
  return data;
};

export const AddInvoiceData = async (invoiceData) => {
  let data = {
    business_code: invoiceData.business_code,
    cust_number: invoiceData.cust_number,
    clear_date: invoiceData.clear_date,
    buisness_year: invoiceData.buisness_year,
    doc_id: invoiceData.doc_id,
    posting_date: invoiceData.posting_date,
    document_create_date: invoiceData.document_create_date,
    due_in_date: invoiceData.due_in_date,
    invoice_currency: invoiceData.invoice_currency,
    document_type: invoiceData.document_type,
    posting_id: invoiceData.posting_id,
    total_open_amount: invoiceData.total_open_amount,
    baseline_create_date: invoiceData.baseline_create_date,
    cust_payment_terms: invoiceData.cust_payment_terms,
    invoice_id: invoiceData.invoice_id,
    sl_no: invoiceData.sl_no,
  };

  let response = await axios.get(baseUrl + "AddInvoiceData", { params: data });
  return response;
};

export const UpdateInvoiceData = async (
  sl_no,
  invoice_currency,
  cust_payment_terms
) => {
  let data = {
    sl_no,
    invoice_currency,
    cust_payment_terms,
  };
  let response = await axios.get(baseUrl + "UpdateInvoiceData", {
    params: data,
  });
  return response;
};

export const DeleteInvoiceData = async (sl_no) => {
  let response;
  for (let i = 0; i < sl_no.length; i++) {
    response = await axios.get(baseUrl + "DeleteInvoiceData", {
      params: { sl_no: sl_no[i] },
    });
  }
  return response;
};

export const search = async (cust_number) => {
  let data = {
    cust_number: cust_number,
  };
  let response = await axios.get(baseUrl + "SearchInvoiceData", { params: data });
  return response.data;
};

export const advsearch = async (doc_id,invoice_id,cust_number,buisness_year) => {
  let data = {
    doc_id:doc_id,
    invoice_id:invoice_id,
    cust_number:cust_number,
    buisness_year:buisness_year,
  };
  let response = await axios.get(baseUrl + "AdvSearchInvoiceData", { params: data });
  return response.data;
};

export const predict = async (doc_id) => {
  let data = {
    doc_id: doc_id,
  };
  let response = await axios.post(baseUrl2 , data);
  console.log(response);
  return response;
};

export const barChart = async (
  clear_date_start,clear_date_end,
  due_date_start,due_date_end,
  baseline_create_date_start,baseline_create_date_end,
  invoice_currency
  ) => {
  let data = {
    clear_date_start: clear_date_start,
    clear_date_end: clear_date_end,
    due_date_start: due_date_start,
    due_date_end: due_date_end,
    baseline_create_date_start: baseline_create_date_start,
    baseline_create_date_end: baseline_create_date_end,
    invoice_currency: invoice_currency,
  };
  let response = await axios.get(baseUrl + "BarChart", { params: data });
  return response.data;
};

export const pieChart = async (
  clear_date_start,clear_date_end,
  due_date_start,due_date_end,
  baseline_create_date_start,baseline_create_date_end,
  invoice_currency
  ) => {
  let data = {
    clear_date_start: clear_date_start,
    clear_date_end: clear_date_end,
    due_date_start: due_date_start,
    due_date_end: due_date_end,
    baseline_create_date_start: baseline_create_date_start,
    baseline_create_date_end: baseline_create_date_end,
    invoice_currency: invoice_currency,
  };
  let response = await axios.get(baseUrl + "PieChart", { params: data });
  return response.data;
};
