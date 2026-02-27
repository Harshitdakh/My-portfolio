Get-ChildItem -Path . -Include *.html -Recurse | ForEach-Object {
    $path = $_.FullName
    $content = Get-Content -Path $path -Raw
    $updated = $false

    if ($content -notmatch 'id="nav-toggle"') {
        # insert toggle after logo div
        $content = $content -replace '(<nav class="navbar">\s*<div class="logo"[\s\S]*?</div>)', '$1`n    <input type="checkbox" id="nav-toggle" class="nav-toggle">`n    <label for="nav-toggle" class="nav-toggle-label"><span></span></label>'
        $updated = $true
    }

    # fix encoded arrow
    if ($content -match 'More â–¾') {
        $content = $content -replace 'More â–¾', 'More &#9660;'
        $updated = $true
    }

    if ($updated) {
        Set-Content -Path $path -Value $content -Encoding UTF8
        Write-Host "Patched: $path"
    }
}
