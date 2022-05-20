import java.io.*;
import java.util.*;

import javax.servlet.*;
import javax.servlet.http.*;

// import jakarta.servlet.*;
// import jakarta.servlet.http.*;

import java.sql.*;
 
public class InsertCred extends HttpServlet{
		// JDBC driver name and database URL
      static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
      static final String DB_URL="jdbc:mysql://localhost:3306/test?characterEncoding=utf8";

      //  Database credentials
      static final String USER = "root";
      static final String PASS = "MySQL@123";
	  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
   
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
                   .prepareStatement("insert into cred values(?, ?)");
			st.setString(1, request.getParameter("uname"));
			st.setString(2, request.getParameter("password"));
			st.executeUpdate();
  
            // Close all the connections
            st.close();
            conn.close();
  
            // Get a writer pointer 
            // to display the successful result
            
            out.println("<html><body><b>Successfully Inserted"
                        + "</b></body></html>");
	    response.sendRedirect("login.html");
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
} 