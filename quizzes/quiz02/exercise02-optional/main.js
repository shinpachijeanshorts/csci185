// ignore this function for now. We'll go over it
// on Wednesday:
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2024/fall/`;
    courseList = await fetch(url).then((response) => response.json());
    displayResults(courseList);
}

function displayResults(courses) {
    // your code here.
    console.log(courses);
    const container = document.querySelector(`#results`);
    container.innerHTML = ``;
    for (let i = 0; i < courseList.length; i++) {
        const course = courseList[i];
        let instructor = '';
        if (course.Instructors.length > 0) {
            instructor = course.Instructors[0].Name;
            let include = false;
            if (course.Department == `CSCI`) {
                include = true;
            }
            if (include) {
                const template = `
                <section class="course">
                    <h2>${course.Code}: ${course.Title}</h2>
                    <p>
                    ${course.Days} &bull; ${course.Location.FullLocation} &bull; ${course.Hours} credit hour(s)
                    </p>
                    <p><strong>${instructor}</strong></p>

                </section>`;
                container.insertAdjacentHTML('beforeend', template);
            }

        }
    }
}