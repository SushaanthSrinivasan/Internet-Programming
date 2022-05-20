import java.io.*;
import java.util.*;

import javax.servlet.*;
import javax.servlet.http.*;

// import jakarta.servlet.*;
// import jakarta.servlet.http.*;

import java.sql.*;
 
public class InsertDet extends HttpServlet{
		// JDBC driver name and database URL
      static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
      static final String DB_URL="jdbc:mysql://localhost:3306/test?characterEncoding=utf8";

      //  Database credentials
      static final String USER = "root";
      static final String PASS = "MySQL@123";
	  public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
   
		// Set response content type
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
           
		try {
			// Register JDBC driver
			//Class.forName("com.mysql.cj.jdbc.Driver");
			Class.forName(JDBC_DRIVER);
         
			// Open a connection
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
	
			// Execute SQL query 
			PreparedStatement st = conn
                   .prepareStatement("insert into userdet values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
			st.setString(1, request.getParameter("name"));
			st.setString(2, request.getParameter("college"));
			st.setString(3, request.getParameter("address"));
			st.setString(4, request.getParameter("age"));
			st.setString(5, (String)request.getParameter("DOB"));
			st.setString(6, (String)request.getParameter("gender"));
			st.setString(7, (String)request.getParameter("department"));
			st.setString(8, request.getParameter("mobile"));
			st.setString(9, (String)request.getParameter("email"));
			st.setString(10, request.getParameter("prog"));
			st.executeUpdate();
  
            // Close all the connections
            st.close();
            conn.close();
			
			Cookie namecookie = new Cookie("Name", request.getParameter("name"));
			response.addCookie(namecookie);
			
			Cookie contactnocookie = new Cookie("ContactNo", request.getParameter("mobile"));
			response.addCookie(contactnocookie);
  
            // Get a writer pointer 
            // to display the successful result
            
            RequestDispatcher rd = request.getRequestDispatcher("ID2");
			rd.forward(request, response);
	    //response.sendRedirect("login.html");
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
} 