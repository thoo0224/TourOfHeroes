using backend.Objects;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "LocalOriginsPolicy",
        policyBuilder => policyBuilder.AllowAnyOrigin());
});

var app = builder.Build();
app.UseCors("LocalOriginsPolicy");
app.UseHttpsRedirection();

var heroes = new Hero[]
{
    new(11, "Dr Nice"),
    new(12, "Narco"),
    new(13, "Bombasto"),
    new(14, "Celeritas"),
    new(15, "Magneta"),
    new(16, "RubberMan"),
    new(17, "Dynama"),
    new(18, "Dr IQ"),
    new(19, "Magma"),
    new(20, "Tornado"),
};
app.MapGet("/api/heroes", () => heroes);
app.MapGet("/api/hero/{Id:int}", (int id) => heroes.FirstOrDefault(x => x.Id == id));

app.Run();