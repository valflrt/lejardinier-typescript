import { Client, Message, MessageEmbed } from "discord.js";

import commands from "../commands";
import { Command } from "../types";
import config from "../config";

class MessageInfo {

	public message: TMessage;
	public bot: Client;

	public methods: Function[];

	private command: Command;
	private embed: MessageEmbed;

	constructor(message: Message, bot: Client) {
		this.message = message;
		this.bot = bot;
		this.methods = new Array();

		this.command = this.getCommand();
		this.embed = this.setEmbed();
	};

	private getCommand = (): Command => {
		return commands.toArray().find(command => message.content.match(new RegExp(`^${config.prefix}${command.name}`, "g")) !== null)[0];
	}

	private setEmbed = () => {
		return;
	}

};

export default MessageInfo;