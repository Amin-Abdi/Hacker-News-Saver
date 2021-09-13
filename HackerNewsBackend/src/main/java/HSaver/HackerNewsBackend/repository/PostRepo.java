package HSaver.HackerNewsBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import HSaver.HackerNewsBackend.model.Post;

@Repository
public interface PostRepo extends JpaRepository<Post, Long>{

}
