# nightwatch-helpers

Custom assertions and commands for easier Nightwatch tests.

## Usage

``` bash
npm install nightwatch-helpers --save-dev
```

In your Nightwatch config:

``` json
{
  "custom_commands_path": ["node_modules/nightwatch-helpers/commands"],
  "custom_assertions_path": ["node_modules/nightwatch-helpers/assertions"]
}
```

## What's Included

### Assertions

- count(selector, count)

- attributePresent(selector, attr)

- evaluate(fn, [args], [message])

- checked(selector, expected)

- focused(selector, expected)

- hasHTML(selector, html)

- notVisible(selector)

### Commands

- dblClick(selector)

- waitFor(duration)

- trigger(selector, event, [keyCode])

- enterValue(selector, value)
