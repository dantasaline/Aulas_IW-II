$(document).ready(function() {
    const mario = $('.mario');
    const pipe = $('.pipe');

    const jump = () => {
        mario.addClass('jump');

        setTimeout(() => {
            mario.removeClass('jump');
        }, 500);
    };

    const loop = setInterval(() => {
        const pipePosit = pipe.offset().left;
        const marioPosit = parseInt(mario.css('bottom').replace('px', ''));

        if (pipePosit <= 125 && pipePosit > 0 && marioPosit < 85) {
            pipe.css('animation', 'none');
            pipe.css('left', `${pipePosit}px`);
            mario.css('animation', 'none');
            mario.css('bottom', `${marioPosit}px`);
            mario.attr('src', 'img/yoshim.webp');
            mario.css('width', '135px');
            mario.css('marginLeft', '50px');
            clearInterval(loop);
        }
    }, 10);

    $(document).keydown(jump);
});
