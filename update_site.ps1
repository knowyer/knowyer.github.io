$filePath = "C:\Users\know.yer\.openclaw\workspace\knowyer\app.js"
$content = Get-Content $filePath -Raw

# The old text (with CRLF)
$oldText = "posts: [`r`n            {`r`n                id: 'ps-2026-05-11'`r`n                title: '五月丁香"

$newText = "posts: [`r`n            {`r`n                id: 'ps-2026-05-12'`r`n                title: '屋顶上的桃花源：蔡皋与她的「生活美学」',`r`n                content: '「生活是一本最大的书，要去读、去记、去感受。」这是绘本艺术家蔡皋在她近四十年创作生涯中最常提及的一句话。2026年，这位年届八旬的绘本画家摘得了国际安徒生奖插画家奖的桂冠，成为首位获此殊荣的中国艺术家。`n`n蔡皋的童年，在湖南乡村的田间地头度过。没有精致的画具与系统的理论，只有雾气、田埂、锄头与童谣。然而正是这些看似寻常的乡村意象，化作她笔下最鲜活的美学符号。她说：「技法与色彩都要服务于主题，而非刻意彰显个人特色。」这一理念，与程序员写代码的美学追求何其相似——好的代码不在于炫技，而在于恰到好处地解决问题。`n`n蔡皋在自家屋顶打造了一座花园，种满花草，写生、创作、感悟自然。她心中的桃花源，不是遥不可及的乌托邦，而是人与自然和谐相处的敬畏之心，是包容开放、热爱世界的宽广胸怀。「我没时间怕老」是她最广为流传的一句话，简单却有力——热爱可抵岁月漫长。`n`n面对AI时代的冲击，蔡皋的回应温柔而坚定：AI可以提供便利，但永远无法替代人心。创作的核心是人类独有的灵感、感知与情感——这些独一无二的生命印记，正是技术无法复制的温度。`n`n五月初夏，愿你我都能在忙碌之余，为自己留一座屋顶花园——那是属于每个人的桃花源，是对抗浮躁时代的一剂温柔处方。',`r`n                date: '2026-05-12',`r`n                tags: ['生活美学', '绘本', '蔡皋', '桃花源']`r`n            },`r`n            {`r`n                id: 'ps-2026-05-11'`r`n                title: '五月丁香"

if ($content.Contains($oldText)) {
    $newContent = $content.Replace($oldText, $newText)
    [System.IO.File]::WriteAllText($filePath, $newContent, [System.Text.Encoding]::UTF8)
    Write-Host "SUCCESS: Post added"
} else {
    Write-Host "ERROR: Old text not found"
    # Debug: show what we have
    $idx = $content.IndexOf("posts: [")
    if ($idx -ge 0) {
        Write-Host "Content around posts: [$($content.Substring($idx, 80))]"
    }
}