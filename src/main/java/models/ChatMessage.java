package models;

public class ChatMessage {
	private MessageType type;
	private String sender,receiver;
	private String message;
	
	public enum MessageType{
		CHAT,
		JOIN,
		LEAVE
	}

	public MessageType getType() {
		return type;
	}

	public void setType(MessageType type) {
		this.type = type;
	}

	public String getSender() {
		return sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	public String getReceiver() {
		return receiver;
	}

	public void setReceiver(String reviever) {
		this.receiver = reviever;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
