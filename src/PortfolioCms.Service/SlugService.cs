using System.Globalization;
using System.Text;
using System.Text.RegularExpressions;

namespace PortfolioCms.Service;

public sealed partial class SlugService
{
    public string CreateSlug(string value)
    {
        var normalized = value.Trim().ToLowerInvariant().Normalize(NormalizationForm.FormD);
        var builder = new StringBuilder(normalized.Length);

        foreach (var ch in normalized)
        {
            var category = CharUnicodeInfo.GetUnicodeCategory(ch);
            if (category != UnicodeCategory.NonSpacingMark)
            {
                builder.Append(ch == 'đ' ? 'd' : ch);
            }
        }

        var slug = NonSlugCharacters().Replace(builder.ToString().Normalize(NormalizationForm.FormC), "-");
        slug = RepeatedDashes().Replace(slug, "-").Trim('-');
        return string.IsNullOrWhiteSpace(slug) ? Guid.NewGuid().ToString("n")[..8] : slug;
    }

    [GeneratedRegex("[^a-z0-9]+")]
    private static partial Regex NonSlugCharacters();

    [GeneratedRegex("-+")]
    private static partial Regex RepeatedDashes();
}
