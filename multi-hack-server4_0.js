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
		ns.brutessh("netlink");
			ns.brutessh("millenium-fitness");
				ns.brutessh("syscore");
					ns.brutessh("omega-net");
						ns.brutessh("the-hub");
							ns.brutessh("phantasy");
	
	//End of execution of BruteSSH.exe//

	//HTTPworm.exe will be executed here:

	ns.httpworm("millenium-fitness");
		ns.httpworm("netlink");
			ns.httpworm("syscore");
	
	//End of execution of HTTPworm.exe//

	//SQLinject.exe will be executed here:

	ns.sqlinject("syscore");

	//End of execution of SQLinject.exe//
	
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

	await ns.singularity.installBackdoor("max-hardware");
	await ns.singularity.installBackdoor("neo-net");
	await ns.singularity.installBackdoor("netlink");
	await ns.singularity.installBackdoor("millenium-fitness");
	await ns.singularity.installBackdoor("syscore");
	await ns.singularity.installBackdoor("omega-net");
	await ns.singularity.installBackdoor("the-hub");
	await ns.singularity.installBackdoor("phantasy");
	await ns.singularity.installBackdoor("zer0");
	
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

		await ns.grow("max-hardware");
		await ns.grow("neo-net");
		await ns.grow("netlink");
		await ns.grow("millenium-fitness");
		await ns.grow("syscore");
		await ns.grow("omega-net");
		await ns.grow("the-hub");
		await ns.grow("phantasy");
		await ns.grow("zer0");

		//End of execution of the Grow Command//

		await ns.sleep(3000);
			ns.alert("Servers Money growed.");
				await ns.sleep(3000);

		await ns.sleep(3000);
			ns.alert("Servers Security will be weakened. It can be a few Seconds to Minutes.");
				await ns.sleep(8000);

		//Weaken Command will be executed on the backdoored servers to make sure commands like grow or hack wont fail here:
	
		await ns.weaken("max-hardware");
		await ns.weaken("neo-net");
		await ns.weaken("netlink");
		await ns.weaken("millenium-fitness");
		await ns.weaken("syscore");
		await ns.weaken("omega-net");
		await ns.weaken("the-hub");
		await ns.weaken("phantasy");
		await ns.weaken("zer0");

		//End of execution of the Weaken Command//

		await ns.sleep(3000);
			ns.alert("Servers Security weakened.");
				await ns.sleep(3000);

		await ns.sleep(3000);
			ns.alert("Servers Money will be hacked. It can be a few Seconds to Minutes.");
				await ns.sleep(8000);

		//Hack Command will be executed on the weakened servers to get the money we growed before here:
	
		await ns.hack("max-hardware");
		await ns.hack("neo-net");
		await ns.hack("netlink");
		await ns.hack("millenium-fitness");
		await ns.hack("syscore");
		await ns.hack("omega-net");
		await ns.hack("the-hub");
		await ns.hack("phantasy");
		await ns.hack("zer0");

		//End of execution of the Hack Command//

		await ns.sleep(3000);
			ns.alert("Servers Money Hacked.");
				await ns.sleep(3000);

		//Update 2.0: 
		//Now we have to use the Weaken Command again to make sure that the Hack and Grow Command works everytime.//

		await ns.weaken("max-hardware");
		await ns.weaken("neo-net");
		await ns.weaken("netlink");
		await ns.weaken("millenium-fitness");
		await ns.weaken("syscore");
		await ns.weaken("omega-net");
		await ns.weaken("the-hub");
		await ns.weaken("phantasy");
		await ns.weaken("zer0");

		//Update 2.0: 
		//End of execution of the Weaken Command//

		//restarting loop

		await ns.sleep(3000);
			ns.alert("Restarting Loop...");
				await ns.sleep(6513);
						ns.alert("done with loading.");
							ns.alert("restarted.")
								await ns.sleep(1);
		
		//restarted loop
	}
}
