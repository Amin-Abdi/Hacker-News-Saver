package HSaver.HackerNewsBackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import HSaver.HackerNewsBackend.model.Post;
import HSaver.HackerNewsBackend.repository.PostRepo;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class PostController {
	
	@Autowired
	private PostRepo postRepository;
	
	/* Since I am not changing teh details of the posts that are saved into the database,
	 * I will not implement a Put Mapping
	 */
	
	//Fetching the posts from the database
	@GetMapping("/posts")
	public List<Post> getPosts() {
		return postRepository.findAll();
	}
	
	
	//Fetching the posts by id
	@GetMapping("/posts/{id}")
	public ResponseEntity<Post> getPostById(@PathVariable Long id) {
		Optional<Post> post = postRepository.findById(id);
		return post.map(response -> ResponseEntity.ok(response)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	
	//Creating the post
	@PostMapping("/posts")
	public Post createPost(@RequestBody Post post) {
		return postRepository.save(post);
	}
	
	@DeleteMapping("/posts/{id}")
	public ResponseEntity<Post> deleteExpense(@PathVariable Long id) {
		postRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}
	
}














