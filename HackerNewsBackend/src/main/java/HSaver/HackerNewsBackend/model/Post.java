package HSaver.HackerNewsBackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity
@Table(name="Posts")
public class Post {
	//This is the ObjectID that comes from the hacker news API
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id; 
	
	@NotNull
	private String author;
	
	@NotNull
	private int numOfComments;
	
	@NotNull
	private int points;
	
	@NotNull
	private String title;
	
	@NotNull
	private String url;

	public Post(long id, String author, int numOfComments, int points, String title, String url) {
		super();
		this.id = id;
		this.author = author;
		this.numOfComments = numOfComments;
		this.points = points;
		this.title = title;
		this.url = url;
	}
	
	

}








