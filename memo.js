
    const title = document.querySelector("#title");
    const content = document.querySelector("#content");
    const saveBtn = document.querySelector("#save-btn");
    const deleteBtn = document.querySelector("#delete-btn");
    const memoList = document.querySelector("#memo-list");
    const memo = {};
    const memoArray = [];

    function saveMemo() {
      memo["title"] = title.value;
      memo["content"] = content.value;
      memoArray.push({ ...memo });
      // memoArray = [
      //     ...memoArray,
      //     {title: title.value, content: content.value},
      // ];

      localStorage.setItem("메모", JSON.stringify(memoArray));

      showMemo(memo.title, memo.content);

      title.value = "";
      content.value = "";
    }

    function showMemo(title, content) {
      const li = document.createElement("li");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");

      h2.innerHTML = title;
      p.innerHTML = content;

      li.appendChild(h2);
      memoList.appendChild(li);

      li.addEventListener("click", () => {
        li.classList.toggle("clicked");
        li.appendChild(p);
      });
    }

    function deleteMemo() {}

    saveBtn.addEventListener("click", saveMemo);
    deleteBtn.addEventListener("click", deleteMemo);
