import { log } from "@graphprotocol/graph-ts";
import { ModAdded, ModRemoved } from "../generated/ModRegistry/ModRegistry";
import { Moderator } from "../generated/schema";

export function handleModAdded(event: ModAdded): void {
    log.info("mod added in transaction {}", [event.transaction.hash.toHexString()]);
    let modAddress = event.params.addedMod.toHexString();
    let mod = Moderator.load(modAddress);
    if(mod == null) {
        // first time mod has been added
        mod = new Moderator(modAddress);
        mod.canMod = true;
    } else {
        // Mod was added before but removed
        mod.canMod = true;
    }
    mod.save();
}

export function handleModRemoved(event: ModRemoved): void {
    log.info("mod removed in transaction {}", [event.transaction.hash.toHexString()]);
    let modAddress = event.params.removedMod.toHexString();
    let mod = Moderator.load(modAddress);
    if(mod == null) {
        // mod removed before it was added
        // should not be possible due to how events are emitted but handle that case
        mod = new Moderator(modAddress);
        mod.canMod = false;
    } else {
        // Mod removed
        mod.canMod = false;
    }
    mod.save();
}