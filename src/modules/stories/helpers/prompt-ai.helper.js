function promptAi(storyContents) {
    const prompt =
        `Mình có một truyện tự mình bịa ra (cho vui) bạn cho mình một json theo format về đôi chút lời bình luận cho câu chuyện và cho điểm (thang điểm 7) nhé:
- Câu chuyện: 
""""""
${storyContents}
""""""
- Format json trả về:
"""""
{
    comment:
    start:
}
"""""
`
    return prompt;
}

module.exports = promptAi;