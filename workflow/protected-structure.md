# Protected Structure

This repo has a protected structure. Agents may add content inside these folders, but must not rename or move them without explicit user approval.

## Protected Top-Level Files And Folders

- `AGENTS.md`
- `README.md`
- `.gitignore`
- `prompts/`
- `skills/`
- `workflow/`
- `schemas/`
- `templates/`
- `knowledge/`
- `media/`

## Protected System Files

- `skills/extract/SKILL.md`
- `workflow/extraction-process.md`
- `workflow/category-catalogue.md`
- `workflow/brain-structure.md`
- `workflow/protected-structure.md`
- `schemas/knowledge-node.schema.json`
- `schemas/extraction-report.schema.json`
- `templates/extraction-report.md`
- `templates/knowledge-node.md`
- `templates/moment.md`
- `templates/reusable-recipe.md`

## Allowed Growth

- Add source-specific prompts under `prompts/`.
- Add extract reports under `knowledge/sources/<extract-id>/`.
- Add nodes under `knowledge/findings/`, `knowledge/patterns/`, and `knowledge/synthesis/`.
- Add moment GIF/video files under `media/moments/<extract-id>/`.
- Add stills under `media/stills/<extract-id>/`.

## Disallowed Without Explicit Approval

- Renaming protected folders.
- Moving schemas or templates.
- Moving the `extract` skill.
- Replacing the category catalogue with an incompatible taxonomy.
- Storing extraction media outside `media/`.
