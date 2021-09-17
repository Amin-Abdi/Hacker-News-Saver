package HSaver.HackerNewsBackend;

import static org.assertj.core.api.Assertions.assertThat;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import HSaver.HackerNewsBackend.model.Post;
import HSaver.HackerNewsBackend.repository.PostRepo;


@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class PostTest {
	
	@Autowired
	PostRepo postRepoTest;
	
	
	//Testing saving to database
	@Test
	public void testSavePost() {
		Post testPost = new Post(326, "Amin", 87, 261, "Learning Golang", "https://golang.org/");
		postRepoTest.save(testPost);
		
		postRepoTest.flush();
		
		//Fetching from database
		Post foundPost = postRepoTest.findByAuthor(testPost.getAuthor());
		//Testing if the values from the test Object created is equal to the one saved in the database
		//Id, author, numComments, points, title, url
		assertThat(foundPost).isNotNull();//Checking if object is not null
		assertThat(foundPost.getAuthor()).isEqualTo(testPost.getAuthor());
		assertThat(foundPost.getNumOfComments()).isEqualTo(testPost.getNumOfComments());
		assertThat(foundPost.getPoints()).isEqualTo(testPost.getPoints());
		assertThat(foundPost.getTitle()).isEqualTo(testPost.getTitle());
		assertThat(foundPost.getUrl()).isEqualTo(testPost.getUrl());
				
	}
	
	
	//Testign fetching from database
	@Test
	public void testGetPost() {
		
		String myName = "Amin";
		Post testPost = postRepoTest.findByAuthor(myName);
		assertThat(testPost).isNotNull();
		assertThat(testPost.getAuthor()).isEqualTo(myName);
		assertThat(testPost.getNumOfComments()).isEqualTo(87);
		assertThat(testPost.getUrl()).isEqualTo("https://golang.org/");
		assertThat(testPost.getPoints()).isEqualTo(261);
		assertThat(testPost.getTitle()).isEqualTo("Learning Golang");
		
		
		
	}
	
	//Testing deleting From database
	@Test
	public void deletePost() {
		String myName = "Amin";
		Post testPost = postRepoTest.findByAuthor(myName);
		postRepoTest.deleteAll();
		assertThat(postRepoTest.count()).isEqualTo(0);
		
	}
	
	
	
	
}



