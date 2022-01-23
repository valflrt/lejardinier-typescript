import CCommand from "../../../../../../features/commands/classes/command";

import database from "../../../../../../features/database";

import reactions from "../../../../../../assets/reactions";

const clear_cmd = new CCommand()
  .setName("clear")
  .addAlias("cl")
  .setDescription(`Clear the current playlist`)
  .setExecution(async ({ message }) => {
    let cleared = await database.guilds.updateOne(
      {
        id: message.guildId!,
      },
      { playlist: [] }
    );
    if (cleared.ok === 1)
      return message.sendTextEmbed(
        `${reactions.success.random} Playlist cleared`
      );
  })
  .addHelpCommand();

export default clear_cmd;
