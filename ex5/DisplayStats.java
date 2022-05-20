import java.io.*;
import java.util.*;

import javax.servlet.*;
import javax.servlet.http.*;

//import jakarta.servlet.*;
//import jakarta.servlet.http.*;
import java.sql.*;
 
public class DisplayStats extends HttpServlet{
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

			out.println("<html>\n<head>\n<title>Quiz</title>\n</head>\n<body style=\"color: #00ff00; background-image: url('images/bg.jpg');\">\n<form action = \"http://localhost:8080/SQLpgm/ID3\"\n");
	
			// Execute SQL query 
			Statement st = conn.createStatement();
			String sql = "SELECT * FROM test.SCOREDETAILS";
			ResultSet rs = st.executeQuery(sql);
			
			out.println("<h1>Stats</h1>\n");
			
			out.println("<table><tr><th>Name</th><th>Score</th></tr>\n");
			while(rs.next()){
				out.println("<tr><td>" + rs.getString("stname") + "</td><td>" + rs.getString("stscore") + "</td></tr>\n");
			}
			
			out.println("</table>\n</body>\n</html>");
			//out.println("<br><input style=\"margin-top:25px\" type = \"submit\" value = \"Submit\">\n</form>\n</body>\n</html>");
  
            // Close all the connections
            st.close();
            conn.close();
  
            // Get a writer pointer 
            // to display the successful result

	    //response.sendRedirect("login.html");
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
} 