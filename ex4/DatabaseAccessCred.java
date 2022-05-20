import java.io.*;
import java.util.*;

import javax.servlet.*;
import javax.servlet.http.*;

// import jakarta.servlet.*;
// import jakarta.servlet.http.*;

import java.sql.*;
 
public class DatabaseAccessCred extends HttpServlet{
		// JDBC driver name and database URL
      static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
      static final String DB_URL="jdbc:mysql://localhost:3306/test?characterEncoding=utf8";

      //  Database credentials
      static final String USER = "root";
      static final String PASS = "ssn@123";
	  public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
 
		// Set response content type
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String title = "Database Result";
		String docType =
			"<!doctype html public \"-//w3c//dtd html 4.0 " + "transitional//en\">\n";
		
		out.println(docType + "<html>\n" + "<head><title>" + title + "</title></head>\n" + "<body bgcolor = \"#f0f0f0\">\n" + "<h1 align = \"center\">" + title + "</h1>\n");
		try {
			// Register JDBC driver
			Class.forName(JDBC_DRIVER);
			//Class.forName("com.mysql.cj.jdbc.Driver");

			// Open a connection
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
			
			// Execute SQL query
			String uname = request.getParameter("uname");
			String pw = request.getParameter("password");
			Statement stmt = conn.createStatement();
			String sql = "SELECT * FROM test.CRED";
			ResultSet rs = stmt.executeQuery(sql);
			//out.println("Username : " + request.getParameter("uname") + "<br>");
			//out.println("Password : " + request.getParameter("password") + "<br><br>");
			
			int found=0;
			int rowCt=0;
			while(rs.next()){
				// Extract data from result set
				if(rs.getString("uname").equals(uname) && rs.getString("password").equals(pw)){
					out.print("User validated" + "<br>");
					out.println("Username : " + rs.getString("uname") + "<br>");
					out.println("Password : " + rs.getString("password") + "<br><br>");
					//rowCt+=1;
					found=1;
					response.sendRedirect("register4event.html");
				}
			}
			if(found==0){
				out.print("Invalid credentials" + "<br>");
				response.sendRedirect("login.html");
			}
			// while(rs.next()){
			// 	//Retrieve by column name
			// 	int id  = rs.getInt("id");
			// 	int age = rs.getInt("age");
			// 	String first = rs.getString("first");
			// 	String last = rs.getString("last");

			// 	//Display values
			// 	out.print("ID: " + id );
			// 	out.print(", Age: " + age );
			// 	out.print(", First: " + first );
			// 	out.println(", Last: " + last + "<br>");
			// }
			out.println("</body></html>");

			// Clean-up environment
			rs.close();
			stmt.close();
			conn.close();
		} 
		catch(SQLException se) {
			//Handle errors for JDBC
			se.printStackTrace();
		} 
		catch(Exception e) {
			//Handle errors for Class.forName
			e.printStackTrace();
		} 
		finally {
		/*  //finally block used to close resources
			try {
			if(stmt!=null)
				stmt.close();
			} catch(SQLException se2) {
			} // nothing we can do
			try {
			if(conn!=null)
			conn.close();
			} catch(SQLException se) {
			se.printStackTrace();
			} //end finally try */
		} //end try
   }
} 