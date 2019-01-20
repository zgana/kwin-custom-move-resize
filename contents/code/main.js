// 2019 Mike Richman <mike.d.richhman@gmail.com>
// This script is a generalization of "movewindowtocenter" by Konstantinos
// Smanis.  While it is substantially rewritten, the key ideas in
// moveToPosition and resizeClip are borrowed from that original script.
//
// For all I care, this code is covered by the WTFPL.  However, because I
// couldn't have written it wihout Smanis's original script, I include their
// original GPL boilerplate below:
//
// Copyright (C) 2018 Konstantinos Smanis <konstantinos.smanis@gmail.com>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

// decorator width
// correction for certain placements
// 10 for most of my windows, but 0 for some, so setting to 0 for now
decWidth = 0;

// moveToPosition(horizontal, vertical)
// moves window to a corner or edge
//
// horizontal: (0, 1, 2)
// vertical: (0, 1, 2)
// 0: left/upper
// 1: center/center
// 2: right/lower
function moveToPosition(horizontal, vertical) {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var dx = (maxArea.width - client.width) / 2;
        var dy = (maxArea.height - client.height) / 2;
        var X = maxArea.x + horizontal * dx;
        var Y = maxArea.y + vertical * dy;
        if (horizontal == 0) X = X - decWidth;
        if (horizontal == 2) X = X + decWidth;
        client.geometry = {
            x: X, y: Y,
            width: client.width, height: client.height
        };
    }
}

// resizeClip(horizontal, vertical)
// resizes window and moves to corner or edge if resize results in overflow
//
// horizontal: 0 (no-op) or width in px
// vertical: 0 (no-op) or height in px
function resizeClip(horizontal, vertical) {
    var client = workspace.activeClient;
    var geom = client.geometry;
    var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
    var x = geom.x;
    var y = geom.y;
    var width = geom.width;
    var height = geom.height;
    if (client.resizeable) {
        if (horizontal) width = horizontal;
        if (vertical) height = vertical;
        if (client.moveable) {
            if (x + width > maxArea.x + maxArea.width) {
                x = maxArea.x + maxArea.width - width + decWidth;
            }
            if (y + height > maxArea.y + maxArea.height) {
                y = maxArea.y + maxArea.height - height;
            }
        }
        client.geometry = { x: x, y: y, width: width, height:height };
    }
}

// Move Shortcuts
// Defaults make sense on a QWERTY hardware keyboard using Dvorak bindings:
// G C R
// H T N
// M W V
//
// If you are using a standard QWERTY setup, consider changing these to:
// U I O
// J K L
// M , .
registerShortcut(
    "MoveWindowToUpperLeft", "Move Window to Upper Left",
    "Shift+Ctrl+Alt+G", function () { moveToPosition(0, 0); }
);
registerShortcut(
    "MoveWindowToUpperCenter", "Move Window to Upper Center",
    "Shift+Ctrl+Alt+C", function () { moveToPosition(1, 0); }
);
registerShortcut(
    "MoveWindowToUpperRight", "Move Window to Upper Right",
    "Shift+Ctrl+Alt+R", function () { moveToPosition(2, 0); }
);
registerShortcut(
    "MoveWindowToCenterLeft", "Move Window to Center Right",
    "Shift+Ctrl+Alt+H", function () { moveToPosition(0, 1); }
);
registerShortcut(
    "MoveWindowToCenter", "Move Window to Center",
    "Shift+Ctrl+Alt+T", function () { moveToPosition(1, 1); }
);
registerShortcut(
    "MoveWindowToCenterRight", "Move Window to Center Right",
    "Shift+Ctrl+Alt+N", function () { moveToPosition(2, 1); }
);
registerShortcut(
    "MoveWindowToLowerLeft", "Move Window to Lower Left",
    "Shift+Ctrl+Alt+M", function () { moveToPosition(0, 2); }
);
registerShortcut(
    "MoveWindowToLowerCenter", "Move Window to Lower Center",
    "Shift+Ctrl+Alt+W", function () { moveToPosition(1, 2); }
);
registerShortcut(
    "MoveWindowToLowerRight", "Move Window to Lower Right",
    "Shift+Ctrl+Alt+V", function () { moveToPosition(2, 2); }
);


// Resize Shortcuts
// These are very specific to my setup, so YMMV.  But I bet you can think of
// all kinds of variations that will be more useful to you!
registerShortcut(
    "ResizeWindowTall", "Resize Window Tall",
    "Shift+Ctrl+Meta+V", function () { resizeClip(0, 1527)}
)
registerShortcut(
    "ResizeWindowWide", "Resize Window Wide",
    "Shift+Ctrl+Meta+H", function () { resizeClip(2892, 0)}
)
registerShortcut(
    "ResizeWindowTeXWidth", "Resize Window TeX Width",
    "Shift+Ctrl+Meta+X", function () { resizeClip(1556, 0)}
)
registerShortcut(
    "ResizeWindowTermSize", "Resize Window Terminal Size",
    "Shift+Ctrl+Meta+T", function () { resizeClip(1984, 1163)}
)
