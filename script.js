async function fetchWorkouts() {
  const response = await fetch('data.json');
  const data = await response.json();

  return data.map(workout => ({
    ...workout,
    date: new Date(workout.date)
  }));
}

function calculateTotalCalories(workouts) {
  return workouts.reduce((total, workout) => total + workout.calories, 0);
}

function filterWorkoutsByType(workouts, type) {
  if (type === 'all') return workouts;
  return workouts.filter(workout => workout.type === type);
}

function findLongestWorkout(workouts) {
  if (workouts.length === 0) return null;
  return workouts.reduce((longest, current) =>
    current.duration > longest.duration ? current : longest
  );
}

function groupWorkoutsByWeek(workouts) {
  const weeks = {};
  workouts.forEach(workout => {
    const weekStart = new Date(workout.date);
    weekStart.setHours(0, 0, 0, 0);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay());
    const weekKey = weekStart.toISOString().slice(0, 10);
    if (!weeks[weekKey]) {
      weeks[weekKey] = [];
    }
    weeks[weekKey].push(workout);
  });
  return weeks;
}

async function simulateFetchNewWorkouts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newWorkouts = [
        {
          id: "8",
          type: "Running",
          duration: 25,
          calories: 250,
          date: "2023-11-22"
        },
        {
          id: "9",
          type: "Swimming",
          duration: 40,
          calories: 380,
          date: "2023-11-23"
        }
      ];
      resolve(newWorkouts.map(workout => ({
        ...workout,
        date: new Date(workout.date)
      })));
    }, 2000); // Simulate 2-second delay
  });
}

// DOM manipulation functions
function renderWorkouts(workouts) {
  const list = document.getElementById('workout-list');
  list.innerHTML = '';
  workouts.forEach(workout => {
    const li = document.createElement('li');
    li.textContent = `${workout.type} - ${workout.duration} min - ${workout.calories} cal - ${workout.date.toDateString()}`;
    list.appendChild(li);
  });
}

function updateTotalCalories(workouts) {
  const total = calculateTotalCalories(workouts);
  document.getElementById('total-calories').textContent = total;
}

function displayLongestWorkout(workout) {
  const div = document.getElementById('longest-workout');
  if (workout) {
    div.textContent = `${workout.type} - ${workout.duration} min - ${workout.calories} cal - ${workout.date.toDateString()}`;
  } else {
    div.textContent = 'No workouts';
  }
}

function displayWeeklyGroups(groups) {
  const div = document.getElementById('weekly-groups');
  div.innerHTML = '';
  for (const [week, workouts] of Object.entries(groups)) {
    const h3 = document.createElement('h3');
    h3.textContent = `Week starting ${week}`;
    div.appendChild(h3);
    const ul = document.createElement('ul');
    workouts.forEach(workout => {
      const li = document.createElement('li');
      li.textContent = `${workout.type} - ${workout.duration} min - ${workout.calories} cal - ${workout.date.toDateString()}`;
      ul.appendChild(li);
    });
    div.appendChild(ul);
  }
}

// Initialize app
async function init() {
  const workouts = await fetchWorkouts();
  updateTotalCalories(workouts);
  renderWorkouts(workouts);
  const longest = findLongestWorkout(workouts);
  displayLongestWorkout(longest);
  const grouped = groupWorkoutsByWeek(workouts);
  displayWeeklyGroups(grouped);

  // Add event listener for filter
  document.getElementById('filter-type').addEventListener('change', (e) => {
    const filtered = filterWorkoutsByType(workouts, e.target.value);
    renderWorkouts(filtered);
  });
}

document.addEventListener('DOMContentLoaded', init);
