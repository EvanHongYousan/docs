# 如何让CSS动画更自然

在过去，设计师负责设计，程序员负责编码。他们间互不干涉。但随着CSS中transitions和animations的到来，设计和编码的界限模糊了。设计师描述设计，而程序员把设计师的描述翻译成具体代码--这种合作模式不再像过去那么简单。为了高效地协作，设计师必须懂点代码，而程序员必须懂点设计。

举个例子，假设一位设计师要求开发人员实现一个如下图所示的盒子反弹，在没有跨界知识和通用标准表述的情况下，设计师和程序员的沟通会有少许信息丢失。程序员没有足够的信息去了解设计师的意图，设计师也不知道他们到底可以选择什么，并和程序员沟通。在这种信息缺失的沟通下，你最后完成的效果可能是下图这样的：

```html
<h3>Basic Linear Bounce</h3>
<div class="stage">
    <div class="box bounce-1"></div>
</div>
```

```css
 body {
        font: 1em sans-serif;
        text-align: center;
    }
    .stage {
        border-bottom: 3px solid #444;
        display: flex;
        height: 330px;
        width: 100%;
    }
    .box {
        align-self: flex-end;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        background-color: #F44336;
        height: 200px;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
        width: 200px;
    }
    .bounce-1 {
        animation-name: bounce-1;
        animation-timing-function: linear;
    }
    @keyframes bounce-1 {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-100px); }
        100% { transform: translateY(0); }
    }
```

<iframe height='265' scrolling='no' title='Bouncing Box 1' src='//codepen.io/pulpexploder/embed/apxRbK/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/pulpexploder/pen/apxRbK/'>Bouncing Box 1</a> by Brandon Gregory (<a href='https://codepen.io/pulpexploder'>@pulpexploder</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

这样的效果并不会令人很兴奋。虽然这已经符合基本标准，但我们绝对可以做得更好。

首先要看的是animation-timing-function属性。在上面的例子中，我们对此属性赋值linear，这意味着盒子以相同的速度不断移动。在某些情况下，这是可取的；然而，在现实世界中，运动通常不是线性的。

一个简单的解决方法是改变animation-timing-function属性。这使得每个动画的开始和结束比中间部分稍慢，会令一些动画更自然。以下是启用了缓动功能的方块：

```html
<h3>Change the Timing Function to Ease</h3>
<div class="stage">
    <div class="box bounce-2"></div>
</div>
```

```css
body {
        font: 1em sans-serif;
        text-align: center;
    }
    .stage {
        border-bottom: 3px solid #444;
        display: flex;
        height: 330px;
        width: 100%;
    }
    .box {
        align-self: flex-end;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        background-color: #F44336;
        height: 200px;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
        width: 200px;
    }
    .bounce-2 {
        animation-name: bounce-2;
        animation-timing-function: ease;
    }
    @keyframes bounce-2 {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-100px); }
        100% { transform: translateY(0); }
    }
```

这是一个小小的改进，但仍有很多工作要做。该盒子看起来仍然机械和僵硬，同一时间框架内一次又一次地出现相同的动画。在反弹之间增加一点点延迟增加了一些看起来更自然的视觉对比：

```html
<h3>Add a Delay</h3>
<div class="stage">
    <div class="box bounce-3"></div>
</div>
```

```css
body {
        font: 1em sans-serif;
        text-align: center;
    }
    .stage {
        border-bottom: 3px solid #444;
        display: flex;
        height: 330px;
        width: 100%;
    }
    .box {
        align-self: flex-end;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        background-color: #F44336;
        height: 200px;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
        width: 200px;
    }
    .bounce-3 {
        animation-name: bounce-3;
        animation-timing-function: ease;
    }
    @keyframes bounce-3 {
        0%   { transform: translateY(0); }
        30%  { transform: translateY(-100px); }
        50%  { transform: translateY(0); }
        100% { transform: translateY(0); }
    }
```

现在这个盒子看起来像跳跃，而不是简单地上下移动。跳跃之间有一点缠绕和冷却，模仿了如果给予相同的指令，活着的生物可能会做的事情。尽管我们没有提供跳跃盒的外观参考，但我们都对跳跃生物的外观有了很好的了解。因为我们知道自然会发生什么，通过模仿，动画感觉更自然。但是我们可以做更多的事情来让这种感觉变得更加重要。

如果你看动画片，你会注意到自然动作往往被夸大，造成了现实生活的漫画。如果做得好，它可以感受到与真实世界中的某些东西一样自然，并为动画注入一点魅力和个性。

在这个阶段，设计师和开发者之间的合作是至关重要的 - 但许多设计师可能甚至不知道这些选择存在。开发人员可能会将这种可能性提供给设计人员。

通过在方块的比例上添加一些细微的扭曲，我们可以在动画中添加很多内容：

```html
<h3>Add Some Distortion</h3>
<div class="stage">
    <div class="box bounce-4"></div>
</div>
```

```css
body {
        font: 1em sans-serif;
        text-align: center;
    }
    .stage {
        border-bottom: 3px solid #444;
        display: flex;
        height: 330px;
        width: 100%;
    }
    .box {
        align-self: flex-end;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        background-color: #F44336;
        height: 200px;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
        width: 200px;
    }
    .bounce-4 {
        animation-name: bounce-4;
        animation-timing-function: ease;
    }
    @keyframes bounce-4 {
        0%   { transform: scale(1,1)    translateY(0); }
        10%  { transform: scale(1.1,.9) translateY(0); }
        30%  { transform: scale(.9,1.1) translateY(-100px); }
        50%  { transform: scale(1,1)    translateY(0); }
        100% { transform: scale(1,1)    translateY(0); }
    }
```

现在，盒子里有角色。 它感觉活着。 有很多事情需要调整，但这已经比原来的指令更进一步 - 以一种非常好的方式！

我们会更进一步，并在跳转结束时添加一点反弹：

```html
<h3>Add a Second Bounce</h3>
<div class="stage">
    <div class="box bounce-5"></div>
</div>
```

```css
body {
        font: 1em sans-serif;
        text-align: center;
    }
    .stage {
        border-bottom: 3px solid #444;
        display: flex;
        height: 330px;
        width: 100%;
    }
    .box {
        align-self: flex-end;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        background-color: #F44336;
        height: 200px;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
        width: 200px;
    }
    .bounce-5 {
        animation-name: bounce-5;
        animation-timing-function: ease;
    }
    @keyframes bounce-5 {
        0%   { transform: scale(1,1)    translateY(0); }
        10%  { transform: scale(1.1,.9) translateY(0); }
        30%  { transform: scale(.9,1.1) translateY(-100px); }
        50%  { transform: scale(1,1)    translateY(0); }
        57%  { transform: scale(1,1)    translateY(-7px); }
        64%  { transform: scale(1,1)    translateY(0); }
        100% { transform: scale(1,1)    translateY(0); }
    }
```

第二次反弹让这种感觉更加活跃，但似乎还有些东西似乎没有。 与其他动画相比，反弹看起来很僵硬。 我们需要再添加一点像我们所做的那样的失真：

```html
<h3>Add a Little More Distortion</h3>
<div class="stage">
    <div class="box bounce-6"></div>
</div>
```

```css
 body {
        font: 1em sans-serif;
        text-align: center;
    }
    .stage {
        border-bottom: 3px solid #444;
        display: flex;
        height: 330px;
        width: 100%;
    }
    .box {
        align-self: flex-end;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        background-color: #F44336;
        height: 200px;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
        width: 200px;
    }
    .bounce-6 {
        animation-name: bounce-6;
        animation-timing-function: ease;
    }
    @keyframes bounce-6 {
        0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-100px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-7px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
    }
```

最终的微妙扭曲使得反弹看起来更加自然。 总体而言，第一个例子中我们的基本线性反弹有了巨大的改善。

这正是我们正在寻找的东西，但是可以用定制的三次Bézier曲线进一步调整移动速率：

```html
<h3>Add a Custom Bezier Curve</h3>
<div class="stage">
    <div class="box bounce-7"></div>
</div>
```

```css
body {
        font: 1em sans-serif;
        text-align: center;
    }
    .stage {
        border-bottom: 3px solid #444;
        display: flex;
        height: 330px;
        width: 100%;
    }
    .box {
        align-self: flex-end;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        background-color: #F44336;
        height: 200px;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
        width: 200px;
    }
    .bounce-7 {
        animation-name: bounce-7;
        animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
    }
    @keyframes bounce-7 {
        0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-100px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-7px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
    }
```

如果设计人员和开发人员都不了解基本的动画原理和控件，那么这种自定义级别是不可能的。 真的，这篇文章只是抓住了两个领域的表面。 如果您是网页设计师或与设计师合作的网页开发人员，我强烈建议您阅读这两者。

对于动画原则，奥利约翰斯顿和弗兰克托马斯的“生命幻觉：迪士尼动画”是如何让现实生活中的漫画看起来充满活力和真实的伟大入门。 通过使用这种通用语言，设计人员和开发人员之间的沟通和协作变得更加容易。

对于CSS动画的技术控制和变化，可能性几乎是无止境的。 延迟和计时很容易调整。 如前所述，如果您不喜欢现成的易用性定时功能，则可以使用立方贝塞尔（）来创建自己的应用程序。 您还可以调整想要使动画更接近或更接近现实的失真级别。 重要的是，设计师和开发人员都在考虑这些变化，而不是盲目地采取一切都没有定制。 共享的知识和协作可以将简单的动画变成伟大的动画。