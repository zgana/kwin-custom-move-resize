# Move Window to Center
## Description
A simple KWin script that introduces KDE Global Shortcuts for moving and
resizing the active window in the current screen.

This script is inspired by Konstantinos Smanis's [move window to
center](https://github.com/KSmanis/kwin-move-window-to-center) script.  Here
we extend that idea to move windows to corners/edges and to resize to
dimensions that I personally find useful.

Note that "I personally find useful" defaults catering to a Dvorak keyboard
layout and 3200x1800 screen; however, any hardcoded defaults should be easy
to adjust to your own environment and workflow.

If you find this useful, you are strongly encouraged to fork this repository
-- and to share your ideas with [me](mailto:mike.d.richman@gmail.com)!

## Included Shortcuts

### Move

Move shortcuts are provided for moving to all combinations of
{Upper|Center|Lower} {Left|Center|Right}.  If you have a QWERTY keyboard
and use a Dvorak mapping, then the default shortcuts look like

    Shift+Ctrl+Alt +
    G C R
    H T N
    M W V

### Resize 

Resize shortcuts are provided for:
* `ResizeWindowTall`: `Shift+Ctrl+Meta+V`, like Maximize Vertically, but
  leaving enough room expose a system monitor in the bottorm right corner of
  my desktop.
* `ResizeWindowWide`: `Shift+Ctrl+Meta+H`, like Maximize Horizontally, but
  leaving enough room expose a system monitor in the bottorm right corner of
  my desktop.
* `ResizeWindowTeXWidth`: `Shift+Cutrl+Meta+X`, sets the window width
  corresponding to 100 columns wide, my preferred LaTeX editing width, given
  my screen and fonts
* `ResizeWindowTermSize`: `Shift+Ctrl+Meta+T`, sets the window size to my
  default Konsole window size


## Usage Instructions
The script is automatically enabled after [installation](INSTALL.md), but
you might have to restart KWin in order to use it for the first time. You
can configure the key bindings under `System Settings > Shortcuts > Global
Shortcuts > KWin`.
