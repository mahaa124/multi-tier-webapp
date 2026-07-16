// Minimal smoke test placeholder — replace with Jest/Mocha suite as the app grows.
console.log("Running smoke tests...");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
  console.log(`PASS: ${message}`);
}

assert(1 + 1 === 2, "sanity check");

console.log("All smoke tests passed.");
process.exit(0);
