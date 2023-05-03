const input_box = document.getElementById('search_box');
const submit_btn = document.getElementById('submit_btn');
const table_rows = document.getElementsByClassName('table__row');
const search_result = document.getElementById('search_result_p');

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
            row.classList.add('highlight');
        }
    })

    if (str1.length != 0) {
        search_result.innerText = `${cnt} Results Found.`;
        search_result.style.padding = '6px 8px';
    }
})