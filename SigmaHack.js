export async function main(ns) {
    ns.print("Starting script here");
    
    while(true){
        await ns.hack("sigma-cosmetics"); //Use Netscript hack function
        ns.print(ns.args);           //The script arguments must be prefaced with ns as well
        await ns.weaken("sigma-cosmetics"); //Use Netscript weaken function
        ns.print(ns.args);           //The script arguments must be prefaced with ns as well
        await ns.grow("sigma-cosmetics"); //Use Netscript grow function
        ns.print(ns.args);           //The script arguments must be prefaced with ns as well
        await ns.weaken("sigma-cosmetics"); //Use Netscript weaken function
        ns.print(ns.args);           //The script arguments must be prefaced with ns as well
        await ns.hack("sigma-cosmetics"); //Use Netscript hack function
        ns.print(ns.args);           //The script arguments must be prefaced with ns as well
        await ns.weaken("sigma-cosmetics"); //Use Netscript weaken function
        ns.print(ns.args);           //The script arguments must be prefaced with ns as well
    }
}
