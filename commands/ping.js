const { SlashCommandBuilder} = require('discord.js')
const { channelMention, roleMention, userMention } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ats')
		.setDescription('Dis lui que c\'est trop !')
		.addUserOption(option =>
			option
				.setName("id")
				.setDescription('Personne à prévenir qu\'il va trop loin')),
				
	async execute(interaction) {
		const target = interaction.options.getUser('target');
		await interaction.reply('Quelqu\'un trouve que tu vas un peu trop loin' + " <@"+target+">" );
	},
};