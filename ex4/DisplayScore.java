import java.io.*;
import java.util.*;

import javax.servlet.*;
import javax.servlet.http.*;

// import jakarta.servlet.*;
// import jakarta.servlet.http.*;

import java.sql.*;
 
public class DisplayScore extends HttpServlet{
		// JDBC driver name and database URL
      static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
      static final String DB_URL="jdbc:mysql://localhost:3306/test?characterEncoding=utf8";

      //  Database credentials
      static final String USER = "root";
      static final String PASS = "ssn@123";
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

			out.println("<html>\n<head>\n<title>Quiz</title>\n</head>\n<body style=\"color: #00ff00; background-image: url('images/bg.jpg');\">\n<table border=\"1\">\n<tr>\n<th>Question</th>\n<th>Score</th>\n</tr>\n");
	
			String ans1 = request.getParameter("qn1");
			String ans2 = request.getParameter("qn2");

			// Execute SQL query 
			Statement st = conn.createStatement();
			String sql = "SELECT * FROM test.QUIZ";
			ResultSet rs = st.executeQuery(sql);
			int qn = 1;
			int totScore = 0;

			while(rs.next()){
				int score=0;
				if(qn==1 && rs.getString("ans").equals(ans1))
					score=1;
				else if(qn==2 && rs.getString("ans").equals(ans2))
					score=1;
				out.println("<tr>\n<td>" + qn + "</td>\n<td>" + score + "</td>\n</tr>\n");
				totScore+=score;
				qn+=1;
			}

			out.println("<tr>\n<th>Total Score</th>\n<th>" + totScore + "</th>\n</tr>\n</table>\n</body>\n</html");
  
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