/** @param {NS} ns */
export async function main(ns) {
	
	//We (actually only me) wrote this JS Script to help other Players hacking some Company Servers.//
	//(Its just for a game dear FBI Agent xD)//
	//This Script will automatically hack some Company Servers.//
	//You will have to be at a high Hacking Level to hack some of these Servers in this JS Script.//
	//I recommend u will be at least at level 310 or above to use this JS Script.//
	//This Script is from Lejobuild.//
	//Info to some people who are a little bit lost:
	//Its a Hacking JS Script for The Game "Bitburner".//
	//You cant use it outside of this Game.//
	//Here is the game website for some commands, examples, strings and more:
	// https://bitburner.readthedocs.io/en/latest/index.html //
	//Oh, I almost forgot, u can visit my Github repository:
	// https://github.com/Lejobuild/BitBurnerJS_ns //
	// You can find more Scripts for this Game in this repository. //
	//Thanks for reading//
	//Have a beautiful day and i hope you like my work here.//
	//I spent Hours to make this JS Script.//
	//And its even more work when you write this Texts in the files xD//
	await ns.sleep(3000);
		ns.alert("Servers Ports will be opened now. It can be a few Seconds to Minutes.");
			await ns.sleep(8000);

	//FTPcrack.exe will be executed here:

	ns.ftpcrack("max-hardware");
		ns.ftpcrack("neo-net");
			ns.ftpcrack("silver-helix");
				ns.ftpcrack("netlink");
					ns.ftpcrack("millenium-fitness");
						ns.ftpcrack("syscore");
							ns.ftpcrack("omega-net");
								ns.ftpcrack("the-hub");
									ns.ftpcrack("phantasy");
										ns.ftpcrack("zer0");
	
	//End of execution of FTPcrack.exe//

	//BruteSSH.exe will be executed here:

	ns.brutessh("silver-helix");
		ns.brutessh("millenium-fitness");
			ns.brutessh("netlink");
				ns.brutessh("syscore");
					ns.brutessh("omega-net");
						ns.brutessh("the-hub");
							ns.brutessh("phantasy");
	
	//End of execution of BruteSSH.exe//

	//HTTPworm.exe will be executed here:

	ns.httpworm("millenium-fitness");
		ns.httpworm("netlink");
			ns.httpworm("syscore");
				ns.sqlinject("syscore");
	
	//End of execution of HTTPworm.exe//

	await ns.sleep(3000);
		ns.alert("Servers ports for nuking them are now opened.");
			await ns.sleep(6000);
	
	await ns.sleep(3000);
		ns.alert("Servers will be nuked. It can be a few Seconds to Minutes.");
			await ns.sleep(7000);

	//Nuke.exe will be executed here:

	ns.nuke("max-hardware");
	ns.nuke("neo-net");
	ns.nuke("netlink");
	ns.nuke("millenium-fitness");
	ns.nuke("syscore");
	ns.nuke("omega-net");
	ns.nuke("the-hub");
	ns.nuke("phantasy");
	ns.nuke("zer0");

	//End of execution of Nuke.exe//

	await ns.sleep(3000);
		ns.alert("Servers Nuked.");
	await ns.sleep(3000);

	await ns.sleep(3000);
		ns.alert("Nuked Servers will be backdoored now. It can be a few Seconds to Minutes.");
			await ns.sleep(8000);

	//Backdoor command will be executed on the nuked servers here:

	ns.installBackdoor("max-hardware");
	ns.installBackdoor("neo-net");
	ns.installBackdoor("netlink");
	ns.installBackdoor("millenium-fitness");
	ns.installBackdoor("syscore");
	ns.installBackdoor("omega-net");
	ns.installBackdoor("the-hub");
	ns.installBackdoor("phantasy");
	ns.installBackdoor("zer0");
	
	//End of execution of the Backdoor Command//

	await ns.sleep(3000);
		ns.alert("Servers backdoored.");
			await ns.sleep(3000);

	await ns.sleep(3000);
		ns.alert("Backdoored servers Money will be growed now. It can be a few Seconds to Minutes.");
			await ns.sleep(8000);

	//Update 2.0: We can Build a Loop in here//
	while (true) {
		//Grow Command will be executed on the backdoored servers here:

	ns.grow("max-hardware");
	ns.grow("neo-net");
	ns.grow("netlink");
	ns.grow("millenium-fitness");
	ns.grow("syscore");
	ns.grow("omega-net");
	ns.grow("the-hub");
	ns.grow("phantasy");
	ns.grow("zer0");

	//End of execution of the Grow Command//

	await ns.sleep(3000);
		ns.alert("Servers Money growed.");
			await ns.sleep(3000);

	await ns.sleep(3000);
		ns.alert("Servers Security will be weakened. It can be a few Seconds to Minutes.");
			await ns.sleep(8000);

	//Weaken Command will be executed on the backdoored servers to make sure commands like grow or hack wont fail here:
	
	ns.weaken("max-hardware");
	ns.weaken("neo-net");
	ns.weaken("netlink");
	ns.weaken("millenium-fitness");
	ns.weaken("syscore");
	ns.weaken("omega-net");
	ns.weaken("the-hub");
	ns.weaken("phantasy");
	ns.weaken("zer0");

	//End of execution of the Weaken Command//

	await ns.sleep(3000);
		ns.alert("Servers Security weakened.");
			await ns.sleep(3000);

	await ns.sleep(3000);
		ns.alert("Servers Money will be hacked. It can be a few Seconds to Minutes.");
			await ns.sleep(8000);

	//Hack Command will be executed on the weakened servers to get the money we growed before here:
	
	ns.hack("max-hardware");
	ns.hack("neo-net");
	ns.hack("netlink");
	ns.hack("millenium-fitness");
	ns.hack("syscore");
	ns.hack("omega-net");
	ns.hack("the-hub");
	ns.hack("phantasy");
	ns.hack("zer0");

	//End of execution of the Hack Command//

	await ns.sleep(3000);
		ns.alert("Servers Money Hacked.");
			await ns.sleep(3000);

	//Update 2.0: 
	//Now we have to use the Weaken Command again to make sure that the Hack and Grow Command works everytime.//

	ns.weaken("max-hardware");
	ns.weaken("neo-net");
	ns.weaken("netlink");
	ns.weaken("millenium-fitness");
	ns.weaken("syscore");
	ns.weaken("omega-net");
	ns.weaken("the-hub");
	ns.weaken("phantasy");
	ns.weaken("zer0");

	//Update 2.0: 
	//End of execution of the Weaken Command//
	}
}
