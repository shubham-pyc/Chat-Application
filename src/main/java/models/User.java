package models;

import java.io.Serializable;

public class User implements Serializable {
	private String username;
	private String password;
	
	public User(){}
	
	public User(String username,String password){
		this.username = username;
		this.password = password;
		
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String toString(){
		return "{ \"username \" :\""+username+"\",\"password\":\""+password+"\"}";
	}
	public boolean equals(Object object){
		if(object instanceof User){
			if(((User) object).username.equals(this.username) && ((User)object).password.equals( this.password)){
				return true;
			}
		}
		return false;
	}
	
}
