// Task 1: Declare The Task Array and The Interval ID
let oneTimeTasks = [];
let monitoringTaskId = null;

// Task 2: Add One-Time Task Function
function addOneTimeTask(func, delay) {
  // Add the task object to the oneTimeTasks array
  oneTimeTasks.push({ func, delay });
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
  // Iterate over the oneTimeTasks array and use setTimeout to schedule each task
  oneTimeTasks.forEach((task) => {
    setTimeout(task.func, task.delay);
  });
}

// Task 4: Start Monitoring Function
function startMonitoring() {
  console.log("Monitoring started...");
  // Use setInterval to simulate continuous monitoring and print messages every 3 seconds
  monitoringTaskId = setInterval(() => {
    console.log("Monitoring in progress...");
  }, 3000);
}

// Task 5: Stop Monitoring Function
function stopMonitoring() {
  if (monitoringTaskId) {
    clearInterval(monitoringTaskId);
    console.log("Monitoring stopped.");
  } else {
    console.log("No monitoring task to stop.");
  }
}

// Task 6: Start Countdown Function
function startCountdown(duration) {
  let remainingTime = duration;

  // Use setInterval to decrease the countdown every second
  let countdownInterval = setInterval(() => {
    console.log(`Time remaining: ${remainingTime} seconds`);
    remainingTime--;

    // Stop the countdown when it reaches zero and print "Liftoff!" message
    if (remainingTime < 0) {
      clearInterval(countdownInterval);
      console.log("Liftoff!");
    }
  }, 1000);
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission() {
  // Schedule system check tasks, monitoring, and countdown tasks
  addOneTimeTask(() => {
    console.log("Pre-launch system check...");
  }, 0); // No delay for the system check

  addOneTimeTask(() => {
    console.log("System check complete.");
    startMonitoring(); // Start continuous monitoring after system check
  }, 2000); // Delay 2 seconds after the system check

  addOneTimeTask(() => {
    stopMonitoring(); // Stop monitoring after 10 seconds
  }, 10000);

  addOneTimeTask(() => {
    console.log("Starting countdown...");
    startCountdown(10); // Start countdown with 10 seconds
  }, 12000); // Start countdown 12 seconds after the system check

  // Run all the one-time tasks
  runOneTimeTasks();
}

// Start the mission
scheduleMission();
