package models;

import java.util.ArrayList;
import java.util.List;

public class ChatGroup {
	List<String> users;
	String path;
	public Type type;
	
	public enum Type{
		PERSONAL,
		GROUP
	}
	public ChatGroup(){
		users = new ArrayList();
		path = null;
	}
	public void setGroupPath(String path){
		this.path = path;
	}
	public void addUser(String username){
			users.add(username);
	}
	public String toString(){
		String rr = "";
		for(String name:users){
			rr+=name+",";
		}
		return rr;
	}
}
