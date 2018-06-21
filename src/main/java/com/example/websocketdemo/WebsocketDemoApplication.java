package com.example.websocketdemo;

import models.User;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import services.UserService;


@CrossOrigin(origins = "*")
@RestController
@EnableAutoConfiguration
@SpringBootApplication
public class WebsocketDemoApplication {
	UserService service = new UserService();
	public static void main(String[] args) {
		SpringApplication.run(WebsocketDemoApplication.class, args);
	}
	
	
	
	@RequestMapping( value = "/login",produces="application/json",method=RequestMethod.POST)
	public  ResponseEntity<User> login(@RequestBody User user){
		System.out.println(user);
		User temp = service.auth(user);
		if(temp==null)
			return new ResponseEntity(null,HttpStatus.FORBIDDEN);
		
		return new ResponseEntity<User>(temp,HttpStatus.OK);
	}
	
	@RequestMapping(value="/register",produces="application/json",method=RequestMethod.POST)
	public ResponseEntity register(@RequestBody User user){
		
		
		ResponseEntity<User> response;
	
		if(service.register(user)){
			System.out.println("registering new user");
			response = new ResponseEntity<User>(user,HttpStatus.OK);
			
		}
		else{
			User anno = new User("invalid username","anno");
			response = new ResponseEntity(null,HttpStatus.BAD_REQUEST);
			
		}
	
		return response;
	
	}
}
