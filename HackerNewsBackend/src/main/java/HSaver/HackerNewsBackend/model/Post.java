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

	public Post() {
		super();
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public int getNumOfComments() {
		return numOfComments;
	}

	public void setNumOfComments(int numOfComments) {
		this.numOfComments = numOfComments;
	}

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((author == null) ? 0 : author.hashCode());
		result = prime * result + (int) (id ^ (id >>> 32));
		result = prime * result + numOfComments;
		result = prime * result + points;
		result = prime * result + ((title == null) ? 0 : title.hashCode());
		result = prime * result + ((url == null) ? 0 : url.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Post other = (Post) obj;
		if (author == null) {
			if (other.author != null)
				return false;
		} else if (!author.equals(other.author))
			return false;
		if (id != other.id)
			return false;
		if (numOfComments != other.numOfComments)
			return false;
		if (points != other.points)
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		if (url == null) {
			if (other.url != null)
				return false;
		} else if (!url.equals(other.url))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Post [id=" + id + ", author=" + author + ", numOfComments=" + numOfComments + ", points=" + points
				+ ", title=" + title + ", url=" + url + "]";
	}
	
	

}








