const input_box = document.getElementById('search_box');
const submit_btn = document.getElementById('submit_btn');
const table_rows = document.getElementsByClassName('table__row');
const search_result = document.getElementById('search_result_p');

// for searching the text in a row of the table
// listening click event on the submit button
submit_btn.addEventListener('click', () => {
    let str1 = input_box.value.trim().toLowerCase();
    let cnt = 0;
    search_result.innerText = '';
    search_result.style.padding = '0px';
    Array.from(table_rows).forEach((row) => {
        row.classList.remove('highlight');
        const children = row.children;
        let flag = false;
        Array.from(children).forEach((child) => {
            const str2 = child.innerText.toLowerCase();
            if (str1.length != 0 && str2.includes(str1)) {
                flag = true;
                return;
            }
        })
        if (flag) {
            cnt++;
            // if the input text matches with any of the cell of the row then highlight that row
            row.classList.add('highlight');
        }
    })

    if (str1.length != 0) {
        // showing how many rows matched
        search_result.innerText = `${cnt} Results Found.`;
        search_result.style.padding = '6px 8px';
    }
})