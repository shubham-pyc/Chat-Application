package services;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import models.User;


public class UserService {
	private static List<User> userList;
	public UserService(){
		userList = new ArrayList<User>();
		User user1 = new User("shubham","password");
		User user2= new User("admin","password");
		User user3 = new User("yash","password");
		User user4 = new User("shreya","password");
		userList.add(user1);
		userList.add(user2);
		userList.add(user3);
		userList.add(user4);
		
	}
	public  User auth(User user){
		for(int i=0;i<userList.size();i++){
			User temp = userList.get(i);
			if(temp.equals(user)){
				return temp;
			}
		}
		return null;
	}
	public boolean register(User user){
		if(usernameAvailable(user.getUsername())){
			userList.add(user);
			return true;
		}
		return false;
	}
	public boolean usernameAvailable(String username){
		Iterator it = userList.iterator();
		while(it.hasNext()){
			User temp =(User) it.next();
			if(temp.getUsername().equals(username)){
				return false;
			}
		}
		return true;
	}
	public static List<User> getUserList(){
		return userList;
	}
}
