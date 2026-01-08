import * as fs from "fs";
import * as path from "path";
import { extractTokens } from "./extractors/tokens";
import { extractComponents } from "./extractors/components";

const generateSnapshot = () => {
  const date = new Date().toISOString().split("T")[0];
  const snapshotPath = path.join(__dirname, "../snapshots", `${date}.json`);

  const snapshot = {
    date,
    tokens: extractTokens(),
    components: extractComponents(),
  };

  if (!fs.existsSync(path.join(__dirname, "../snapshots"))) {
    fs.mkdirSync(path.join(__dirname, "../snapshots"), { recursive: true });
  }

  fs.writeFileSync(snapshotPath, JSON.stringify(snapshot, null, 2));
  console.log(`Snapshot generated: ${snapshotPath}`);
};

generateSnapshot();
