document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const resultsDiv = document.getElementById('results');
    
    // 示例数据 - 在实际应用中，你可以替换为从API获取的数据
    const sampleData = [
        { id: 1, title: '示例结果1', content: '这是第一个示例结果的内容。' },
        { id: 2, title: '示例结果2', content: '这是第二个示例结果的内容。' },
        { id: 3, title: '另一个结果', content: '这是不同的结果内容。' }
    ];
    
    // 搜索功能
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        
        if (query === '') {
            resultsDiv.innerHTML = '<p>请输入查询内容</p>';
            return;
        }
        
        // 在实际应用中，这里应该是AJAX请求或fetch API调用
        // 这里我们只是过滤示例数据
        const filteredResults = sampleData.filter(item => {
            return item.title.toLowerCase().includes(query) || 
                   item.content.toLowerCase().includes(query);
        });
        
        displayResults(filteredResults);
    }
    
    function displayResults(results) {
        if (results.length === 0) {
            resultsDiv.innerHTML = '<p>没有找到匹配的结果</p>';
            return;
        }
        
        let html = '';
        results.forEach(result => {
            html += `
                <div class="result-item">
                    <h3>${result.title}</h3>
                    <p>${result.content}</p>
                </div>
            `;
        });
        
        resultsDiv.innerHTML = html;
    }
    
    // 初始显示所有数据
    displayResults(sampleData);
});