const { SlashCommandBuilder} = require('discord.js')
const { channelMention, roleMention, userMention } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ats')
		.setDescription('Dis lui que c\'est trop !')
		.addUserOption(option =>
			option
				.setName("target")
				.setDescription('Personne à prévenir qu\'il va trop loin'))
				.addChannelOption(option =>
					option.setName('channel')
						.setDescription('The channel to echo into')),
				
	async execute(interaction) {
		const target = interaction.options.getUser('target');
		const channel = interaction.options.getChannel("channel")
		await channel.send('Quelqu\'un trouve que tu vas un peu trop loin' + " <@"+target+">");
	},
};